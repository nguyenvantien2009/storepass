const inquirer = require('inquirer');

const requireLetterAndNumber = (value) => {
  if (/\w/.test(value) && /\d/.test(value)) {
    return true;
  }

  return 'Password need to have at least a letter and a number';
};

inquirer
  .prompt([
    {
      type: 'password',
      message: 'Enter your master password:',
      name: 'master_password',
      mask: '*',
      validate: requireLetterAndNumber,
    },
  ])
  .then((answers) => console.log(JSON.stringify(answers, null, '  ')));