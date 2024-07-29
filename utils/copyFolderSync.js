
const fs = require('fs');
const path = require('path');

const copyFolderSync = async function (source, target) {
  // 确保源文件夹存在
  if (!fs.existsSync(source)) {
    console.log(`源文件夹 ${source} 不存在`);
    return;
  }

  // 创建目标文件夹
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
    // console.log(`已创建目标文件夹 ${target}`);
  }

  // 获取源文件夹的内容
  const files = fs.readdirSync(source);

  // 遍历文件和子文件夹
  await files.forEach(async (file) => {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);

    // 判断是文件还是文件夹
    if (fs.lstatSync(sourcePath).isDirectory()) {
      // 是文件夹，递归复制
      await copyFolderSync(sourcePath, targetPath);
    } else {
      // 是文件，直接复制
      await fs.copyFileSync(sourcePath, targetPath);
      // console.log(`已复制文件 ${file}`);
    }
  });
};

module.exports = copyFolderSync;
