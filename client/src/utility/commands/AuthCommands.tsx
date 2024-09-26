const utilityCommands = {
    login: () => {
        window.location.replace('http://localhost:3000/api/auth/login');
    },
    logout: () => {
        window.location.replace('http://localhost:3000/api/auth/logout');
    }
}

export default utilityCommands;