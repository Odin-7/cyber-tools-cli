#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk'); //命令行输出样式美化
const clear = require('clear');
const figlet = require('figlet');
const commander = require('commander'); //命令行工具
const inquirer = require('inquirer'); //命令行交互
const copyFolderSync = require('./utils/copyFolderSync');
const deleteFolderSync = require('./utils/deleteFolderSync');

const { exec } = require('child_process');
const { version } = require('./package.json');
const { promptTypeList } = require('./config');

commander
  .version(version, '-v, --version')
  .command('init <projectName>')
  .alias('i')
  .description('Initialize a new project from a template')
  .action(async (projectName) => {
    const projectPath = path.join(process.cwd(), projectName);
    // console.log(`Initializing project ${chalk.cyan(projectName)}...`);
    console.log(`正在初始化项目 ${chalk.cyan(projectName)}...`);



    // 检查项目目录是否已存在
    if (fs.existsSync(projectPath)) {
      // console.error(chalk.red(`Directory ${projectName} already exists.`));
      console.error(chalk.red(`目录${projectName}已存在。`));
      process.exit(1);
    }

    // 清屏 & 美化
    clear()
    console.log(
      chalk.yellowBright(
        figlet.textSync('Cyber Tools Cli', { horizontalLayout: 'full' })
      )
    )

    inquirer.prompt(promptTypeList).then(async result => {

      const { url, gitName, val } = result.type;
      console.log("Template Infomation：" + val);
      console.log('Project initialization...');
      if (!url) {
        console.log(chalk.red(`${val} Project Type Error...`));
        process.exit(1);
      }

      exec('git clone ' + url, async function (error, stdout, stderr) {  //git仓库代码下载
        if (error !== null) {
          console.log(chalk.red(
            `clone fail,${error}`
          ));
          return;
        }
        // 复制文件夹
        await copyFolderSync(gitName, projectName)
        // 删除文件夹
        await exec('rm -rf ' + './' + gitName, function (err, out) { });

        // await deleteFolderSync(gitName)





        // 构建旧路径和新路径
        // const oldPath = path.join(__dirname, gitName);
        // const newPath = path.join(__dirname, projectName);

        // fs.rename(oldPath, newPath, (err) => {


        //   if (err) {
        //     console.log("🚀 ~ fs.renameSync ~ oldPath:", oldPath)
        //     console.log("🚀 ~ fs.renameSync ~ newPath:", newPath)
        //     exec('rm -rf ' + gitName, function (err, out) { });
        //     console.log(chalk.red(`The ${projectName} project template already exist`));
        //   } else {
        //     // console.log(chalk.green(`✔ The ${projectName} project template successfully create(done)`));

        //   }
        // });




        // 清屏 & 美化
        clear()
        console.log(
          chalk.yellowBright(
            figlet.textSync('Cyber Success!', { horizontalLayout: 'full' })
          )
        )

        // fs.writeFileSync(projectName, gitName)
      });

    })
  });

commander.parse(process.argv);
