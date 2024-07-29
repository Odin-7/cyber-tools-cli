let fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
//第二个参数如果是目录里面的文件的话他就会把文件移动
//如果单独只是文件名的话他就会把文件重命名
// if (fs.existsSync('cyber-notes')) {
//   fs.rename('cyber-notes', '11111', (err) => {
//     if (err) {
//       console.log('重命名失败');
//     } else {
//       console.log('重命名成功');
//     }
//   });
// } else {
//   console.log('目录不存在');
// }


// fs.mkdir('test', err => console.log(err)) // 创建 test 文件夹
// fs.copyFile('test.js', '23232323.js', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('已经复制并移动');
//   }
// })
// fs.rmdirSync('ces.js');
//同步操作删除css文件夹
// fs.rmdirSync('ceshi1');
// function deleteFolderRecursive(folderPath) {
//   if (fs.existsSync(folderPath)) {
//     fs.readdirSync(folderPath).forEach((file, index) => {
//       const curPath = path.join(folderPath, file);
//       if (fs.lstatSync(curPath).isDirectory()) { // recurse
//         deleteFolderRecursive(curPath);
//       } else { // delete file
//         fs.unlinkSync(curPath);
//       }
//     });
//     fs.rmdirSync(folderPath);
//     console.log(`成功删除文件夹 ${folderPath}`);
//   }
// }
// const folderToDelete = 'cyber-notes';

// deleteFolderRecursive(folderToDelete);

exec('rm -rf ' + './fast-gpt', function (err, out) { })


// function copyFolderSync(source, target) {
//   // 确保源文件夹存在
//   if (!fs.existsSync(source)) {
//     console.log(`源文件夹 ${source} 不存在`);
//     return;
//   }

//   // 创建目标文件夹
//   if (!fs.existsSync(target)) {
//     fs.mkdirSync(target);
//     console.log(`已创建目标文件夹 ${target}`);
//   }

//   // 获取源文件夹的内容
//   const files = fs.readdirSync(source);

//   // 遍历文件和子文件夹
//   files.forEach((file) => {
//     const sourcePath = path.join(source, file);
//     const targetPath = path.join(target, file);

//     // 判断是文件还是文件夹
//     if (fs.lstatSync(sourcePath).isDirectory()) {
//       // 是文件夹，递归复制
//       copyFolderSync(sourcePath, targetPath);
//     } else {
//       // 是文件，直接复制
//       fs.copyFileSync(sourcePath, targetPath);
//       console.log(`已复制文件 ${file}`);
//     }
//   });
// }
// copyFolderSync('cyber-notes', 'test1');
