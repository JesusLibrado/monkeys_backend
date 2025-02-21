# Getting Started

## 1. GitHub

### 1.1 Install Git

https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

"Installing on Linux"

### 2.1 Install GitHub

https://github.com/cli/cli/blob/trunk/docs/install_linux.md

```sh
gh auth login
gh repo clone JesusLibrado/monkeys_backend
git checkout main
git pull
```

## 2. Docker

### 2.1 Install Docker

https://docs.docker.com/engine/install/ubuntu/

### 2.2 Install MySQL

https://hub.docker.com/r/ubuntu/mysql

```sh
docker pull ubuntu/mysql
docker run -d --name mysql-container -e TZ=UTC -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password ubuntu/mysql:8.0-22.04_beta
sudo docker ps -a | grep mysql
sudo docker inspect mysql-container | grep IPAddress
sudo mysql -h {IPAddress} -u root -p
create database monkeys
```

## 3. DBeaver 

https://dbeaver.io/download/

```sh
sudo dpkg -i dbeaver-nombre-del-archivo.deb
```

Look for `connect to database` option

## 4. Node.js

### 4.1 Install NVM

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
source ~/.bashrc
nvm install node
nvm use node
node -v
```
### 4.2 Install Yarn

```sh
npm install --global yarn
yarn --version
```

## 5. Nest.js

- **Read about GraphQL and Nest**: https://docs.nestjs.com/graphql/quick-start
- **GraphQL Documentation**: https://graphql.org/learn/schema/
- **Example of project tutoria**l: https://medium.com/@dharmaraj.jadeja911/leveraging-the-power-of-graphql-and-typeorm-in-a-nest-js-project-3178d7a72e63

### 5.1 Install project

```sh
yarn install
```

### 5.2 Execute backend app

```sh
yarn start
```
or
```sh
yarn start:local
```
Go to http://localhost:3000/graphql
