import '../../styles/common.less';
import '../../styles/login.less';

class Login {
    constructor() {

    }

    sayHello(): void {
        console.log('Login say hello');
    }
}

let login: Login = new Login();
login.sayHello();