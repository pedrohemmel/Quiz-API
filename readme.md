# Project Setup

## Prerequisites

Ensure you have Node.js and npm installed on your machine. You can download and install them from the [official Node.js website](https://nodejs.org/).

## Initialize a New Node.js Project

Run the following command to initialize a new Node.js project:

```sh
npm init -y
```

## Install Dependencies

Install the necessary dependencies by running:

```sh
npm install express dotenv mysql2 cors
npm install --save-dev nodemon
```

## Docker and MySQL Setup

### Step 1: Install Docker

Ensure you have Docker installed on your machine. You can download and install it from the [official Docker website](https://www.docker.com/products/docker-desktop).

### Step 2: Pull the MySQL Docker Image

Open your terminal and pull the MySQL image from Docker Hub:

```sh
docker pull mysql:latest
```

### Step 3: Create and Run a MySQL Container

Use the following command to create and run a new MySQL container. Replace `your_password` with a strong password:

```sh
docker run --name name-your-container -p 3306:3306 -e MYSQL_ROOT_PASSWORD=your_password -d mysql:latest
```

### Step 4: Verify the Container is Running

Check if the container is running with the following command:

```sh
docker ps
```

### Step 5: Copy the SQL Script to the Container

Replace `entirePath` with the full path to your SQL script and `name-of-your-container` with the name of your MySQL container:

```sh
docker cp entirePath/game-db.sql name-of-your-container:/init.sql
```

### Step 6: Connect to the MySQL Shell

Connect to the MySQL shell inside the container:

```sh
docker exec -it name-your-container mysql -uroot -p
```

### Step 7: Run the SQL Script

Once connected, run the following command to execute your SQL script:

```sql
source /init.sql;
```

### Step 8: Update Your .env File

Ensure you have a `.env` file in your project root. If not, create one following the structure in `.env.example`.

## Install MySQL Client

### macOS

Install Homebrew (if not already installed):

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Install the MySQL client:

```sh
brew install mysql
```

### Ubuntu/Debian

Update the package index:

```sh
sudo apt update
```

Install the MySQL client:

```sh
sudo apt install mysql-client
```

### Windows

1. Download the MySQL installer from [MySQL Downloads](https://dev.mysql.com/downloads/installer/).
2. Follow the installer instructions to install the MySQL client.

### Verify the Installation

After installation, verify that the MySQL client is installed correctly:

```sh
mysql --version
```

### Access the react js project 

[Github repository](https://github.com/pedrohemmel/Quiz-React-JS)
