## Setup

### Project
#### Ensure you have Node.js and npm installed on your machine. You can download and install them from the official Node.js website.

### Initialize a new Node.js project using npm
npm init -y

### Install Dependencies
npm install express
npm install dotenv
npm install --save-dev nodemon
npm install mysql2

### Docker and MySQL
#### Step 1: Install Docker
Ensure you have Docker installed on your machine. You can download and install it from the [official Docker website](https://www.docker.com/products/docker-desktop).

#### Step 2: Pull the MySQL Docker Image
Open your terminal and pull the MySQL image from Docker Hub.
docker pull mysql:latest

#### Step 3: Create and Run a MySQL Container
Use the following command to create and run a new MySQL container. Replace your_password with a strong password.
docker run --name name-your-container -p 3306:3306 -e MYSQL_ROOT_PASSWORD=your_password -d mysql:latest

#### Step 4: Verify the Container is Running
Check if the container is running with the following command:
docker ps

#### Step 5: Copy the SQL Script to the Container:
docker cp entirePath/game-db.sql name-of-your-container:/init.sql

#### Step 6: Connect to the MySQL Shell
docker exec -it your-container-name mysql -uroot -p
Run the Script Using source:

#### Step 7: Run SQL script
source /game-db.sql;

#### Step 8: Atualize o arquivo .env (Crie se não tiver, siga o .env.example como exemplo)

### Instale o Cliente MySQL

#### macOS

Instalar o Homebrew (se ainda não estiver instalado):
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

Instalar o Cliente MySQL:
brew install mysql

#### Ubuntu/Debian

Atualizar o índice de pacotes:
sudo apt update

Instalar o Cliente MySQL:
sudo apt install mysql-client

#### Windows

Baixar o instalador do MySQL: Acesse MySQL Downloads e baixe o instalador apropriado.
Instalar o MySQL: Siga as instruções do instalador para instalar o cliente MySQL.

Verificar a Instalação
Após a instalação, verifique se o cliente MySQL está instalado corretamente:
mysql --version