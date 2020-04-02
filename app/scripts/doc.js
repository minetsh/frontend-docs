const fs = require('fs');
const path = require('path');

const docs_dir = path.join(__dirname, '../../docs');
const target_docs_dir = path.join(__dirname, '../src/docs');

function copy(from, to) {
  const stat = fs.statSync(from);
  if (stat.isFile()) {
    fs.copyFileSync(from, to);
    return;
  }
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to);
  }
  const filenames = fs.readdirSync(from);
  filenames.forEach(filename => {
    copy(`${from}/${filename}`, `${to}/${filename}`);
  });
}

copy(docs_dir, target_docs_dir);

function filename(path) {
  const parts = path.split('/');
  return parts[parts.length - 1];
}

function traverse(path) {
  const stat = fs.statSync(path);
  if (stat.isFile()) {
    return {
      file: true,
      filename: filename(path),
      path,
    };
  }
  const filenames = fs.readdirSync(path);
  const files = [];
  filenames.forEach(filename => {
    files.push(traverse(`${path}/${filename}`));
  });
  return {
    file: false,
    filename: filename(path),
    path,
    files,
  };
}

function uuid() {
  return process.hrtime.bigint().toString(36);
}

const imports = [];
function build(doc) {
  if (doc.file) {
    doc.uid = uuid();
    doc.name = `md${doc.uid}`;
    doc.uri = doc.name;
    imports.push(
      `import ${doc.name} from '${doc.path.replace(docs_dir, '.')}';`,
    );
    return `{uid:'${doc.uid}',file:${doc.file},uri:${doc.name},name:'${doc.filename}'}`;
  }
  const files = [];
  doc.files.forEach(doc => {
    files.push(build(doc));
  });
  return `{uid:'${uuid()}',file:false,name:'${doc.filename}',docs:[${files.join(
    ',',
  )}]}`;
}

const docs = traverse(docs_dir);
const code = build(docs);

const dids = [];
function travel(doc) {
  if (doc.file) {
    dids.push(`'${doc.uid}':${doc.uri}`);
    return;
  }
  doc.files.forEach(file => {
    travel(file);
  });
}

travel(docs);

const index = `${imports.join('\n')}
export const docs = ${code};
export const dids: any = {${dids.join(',')}};
export default docs;
`;

fs.writeFileSync(`${target_docs_dir}/index.ts`, index);
