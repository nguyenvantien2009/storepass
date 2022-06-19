import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import inquirer from 'inquirer'
import AES from 'crypto-js/aes';
import Account from './accounts/models/account';

yargs(hideBin(process.argv))
    .command('account add', 'Add new account.',
        () => { },
        async (argv) => {
            const masterPass = await inquirer.prompt([
                {
                    type: 'password',
                    message: 'Enter your master password:',
                    name: 'master_password',
                    mask: '*'
                }
            ]);

            if (masterPass == '') {
                console.error('Required master password.')
                return;
            }

            const accountInfo = await inquirer.prompt([
                {
                    type: 'text',
                    message: 'Enter your account name:',
                    name: 'account_name',
                }, {
                    type: 'password',
                    message: 'Enter your account pass:',
                    name: 'account_password',
                    mask: '*'
                },{
                    type: 'text',
                    message: 'Enter your account host:',
                    name: 'account_host'
                }, {
                    type: 'text',
                    message: 'Enter your account description [Optional]:',
                    name: 'account_description'
                }
            ]);

            var { 
                account_name: name, 
                account_password: pass 
            } = accountInfo
            pass = AES.encrypt(pass, 'secret key 123').toString();
            
            // add new account.
            await Account.create({name, pass});
            
            const accounts = await Account.findAll({raw: true});
            console.log(console.table(accounts));
        })
    // .demandCommand(1)
    .parse()