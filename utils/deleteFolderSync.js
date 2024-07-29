
const fs = require('fs');
const path = require('path');

const deleteFolderSync = async function (folderPath) {
  if (fs.existsSync(folderPath)) {
    await fs.readdirSync(folderPath).forEach((file, index) => {
      const curPath = path.join(folderPath, file);
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderSync(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    await fs.rmdirSync(folderPath);
    console.log(`成功删除文件夹 ${folderPath}`);
  }
};

module.exports = deleteFolderSync;
