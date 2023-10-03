import { BiArrowBack } from "react-icons/bi";

import Image from "next/image";
import Link from "next/link";
import Clip from "@/components/Clip";
import Block from "@/components/block";

import Textarea from "@/components/textarea";

export default function amazon() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#000016] via-[#001B47] to-[#003E77]">
        <div className="max-w-7xl mx-auto flex justify-between items-center content-center py-4 px-24">
          <Link href="/">
            <Image
              src="/logo_dark.png"
              alt="capaSuaStartup"
              width="120"
              height="80"
            />
          </Link>
          <div className="flex items-center gap-3">
            <Image
              className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src="/user.png"
              alt="Bordered avatar"
              width="100"
              height="50"
            />
            <p className="hidden text-xs">Ricardo.brasiliadf@hotmail.com</p>
          </div>
        </div>
      </div>
      <div className="p-12 flex border-b ">
        <Link
          href="/"
          className="hover:bg-gray-300 hover:text-gray-700 rounded p-1.5"
        >
          <BiArrowBack className="w-6 h-6" />
        </Link>
        <div className="max-w-3xl mx-auto flex justify-center ">
          <h1 className=" text-4xl">Whathicket</h1>
        </div>
      </div>
      <div className="p-12 max-w-7xl mx-auto">
        <p>
          Seja bem vindo a instalação do Whaticket, siga o passo a passo a
          abaixo detalhadamente:
        </p>
        <div className="mt-3">
          <p className="mt-2">
            Crie 2 subdominios em seu Claudflare e aponte para o IP da sua VPS.
          </p>
          <div className="mt-2">
            <span>Frontend : </span>
            <Clip />
            <span>Backend : </span>
            <Clip />
            <span>Senha servidor : </span>
          </div>
        </div>
        <Clip />
      </div>
      <div className="m-12 mt-0 max-w-7xl mx-auto">
        <Link
          target="_blank"
          className="bg-gray-500 rounded p-1.5 "
          href="https://dnschecker.org/"
        >
          dnschecker.org
        </Link>
      </div>
      <hr />
      <div className="p-12 max-w-7xl mx-auto">
        <p>Com o terminal aberto, vamos iniciar:</p>
      </div>
      <div>
        <Block
          textoInicial={`sudo apt update && sudo apt upgrade
`}
        />
        <Block
          textoInicial={`sudo su root
`}
        />
        <Block
          textoInicial={`apt install mysql-server
`}
        />
        <Block
          textoInicial={`mysql --version
`}
        />
        <Block
          textoInicial={`sudo systemctl status mysql

`}
        />
        <Block
          textoInicial={`sudo mysql -u root
`}
        />
        <Textarea
          textArea={`mysql> CREATE DATABASE coruss CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
mysql> USE mysql;
mysql> UPDATE user SET plugin='mysql_native_password' WHERE User='root';
mysql> FLUSH PRIVILEGES;
mysql> exit;`}
          rows={5}
        />
        <Block
          textoInicial={`service mysql restart
`}
        />
        <Block
          textoInicial={`sudo su root
`}
        />
        <Block
          textoInicial={`adduser deploy
`}
        />
        <Block
          textoInicial={`usermod -aG sudo deploy
`}
        />
        <Block
          textoInicial={`su deploy
`}
        />
        <Block
          textoInicial={`sudo apt update && sudo apt upgrade
`}
        />
        <hr />
        <Block
          textoInicial={`curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
`}
        />
        <Block
          textoInicial={`sudo apt-get install -y nodejs
`}
        />
        <Block
          textoInicial={`sudo apt install apt-transport-https ca-certificates curl software-properties-common
`}
        />
        <Block
          textoInicial={`sudo apt update
`}
        />
        <Block textoInicial={"sudo usermod -aG mysql ${USER}"} />
        <Block textoInicial={"su - ${USER}"} />
        <hr />
        <div className="p-12 max-w-7xl mx-auto">
          <p>
            Desconectar o bitivise do usuário Root e conectar com o usuário
            deploy usando a senha criada.
          </p>
        </div>
        <Block
          textoInicial={`sudo apt install unzip
`}
        />
        <Block
          textoInicial={`unzip corussChat.zip
`}
        />
        <Block
          textoInicial={`cp corussChat/backend/.env.example corussChat/backend/.env
`}
        />
        <Block
          textoInicial={`nano /backend/.env
`}
        />
        <Textarea
          rows={15}
          textArea={`NODE_ENV=
BACKEND_URL=https://back.coruss.com.br
FRONTEND_URL=https://chat.coruss.com.br
PORT=8080
PROXY_PORT=443
CHROME_BIN=/usr/bin/google-chrome-stable

DB_DIALECT=mysql
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=coruss

JWT_SECRET=saKPKKOxzczxcnscndcssccdsddngfsacxcs@Ers21vhhghee
JWT_REFRESH_SECRET=kldflhxvcxcxkkkjxhchghjgkdsdsccsd4234asdasdcxcc3`}
        />
        <Textarea
          rows={5}
          textArea={`sudo apt-get install -y libgbm-dev wget unzip fontconfig locales gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils
          `}
        />
        <Block
          textoInicial={`wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
`}
        />
        <Block
          textoInicial={`sudo apt install ./google-chrome-stable_current_amd64.deb
`}
        />
        <Block
          textoInicial={`cd corussChat/backend
`}
        />
        <Block
          textoInicial={`npm install
`}
        />
        <hr />
        <Block
          textoInicial={`npx sequelize db:migrate
`}
        />
        <Block
          textoInicial={`npx sequelize db:seed:all
`}
        />
        <hr />
        <Block
          textoInicial={`sudo npm install -g pm2
`}
        />
        <Block
          textoInicial={`pm2 start dist/server.js --name corussChat-backend
`}
        />
        <Block
          textoInicial={`pm2 startup ubuntu -u deploy
`}
        />
        <Block
          textoInicial={`sudo env PATH=$PATH:/usr/bin pm2 startup ubuntu -u deploy --hp /home/deploy
`}
        />
        <hr />
        <Block
          textoInicial={`cd ../frontend
`}
        />
        <Block
          textoInicial={`npm install --force
`}
        />
        <Block
          textoInicial={`nano .env
`}
        />
        <Block
          textoInicial={`REACT_APP_BACKEND_URL = https://back.coruss.com.br
`}
        />
        <Block
          textoInicial={`npm run build
`}
        />
        <hr />
        <Block
          textoInicial={`pm2 start server.js --name corussChat-frontend
`}
        />
        <Block
          textoInicial={`pm2 save
`}
        />
        <Block
          textoInicial={`pm2 list
`}
        />
        <Block
          textoInicial={`sudo apt install nginx
`}
        />
        <Block
          textoInicial={`sudo rm /etc/nginx/sites-enabled/default
`}
        />
        <Block
          textoInicial={`psudo nano /etc/nginx/sites-available/corussChat-frontend
`}
        />
        <Textarea
          rows={15}
          textArea={`server {
            server_name chat.coruss.com.br;
          
            location / {
              proxy_pass http://127.0.0.1:3333;
              proxy_http_version 1.1;
              proxy_set_header Upgrade $http_upgrade;
              proxy_set_header Connection 'upgrade';
              proxy_set_header Host $host;
              proxy_set_header X-Real-IP $remote_addr;
              proxy_set_header X-Forwarded-Proto $scheme;
              proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
              proxy_cache_bypass $http_upgrade;
            }
             }`}
        />
        <Block
          textoInicial={`sudo cp /etc/nginx/sites-available/corussChat-frontend /etc/nginx/sites-available/corussChat-backend
`}
        />
        <Block
          textoInicial={`sudo nano /etc/nginx/sites-available/corussChat-backend
`}
        />
        <Textarea
          rows={15}
          textArea={`server {
            server_name back.coruss.com.br;
          
            location / {
              proxy_pass http://127.0.0.1:8080;
              proxy_http_version 1.1;
              proxy_set_header Upgrade $http_upgrade;
              proxy_set_header Connection 'upgrade';
              proxy_set_header Host $host;
              proxy_set_header X-Real-IP $remote_addr;
              proxy_set_header X-Forwarded-Proto $scheme;
              proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
              proxy_cache_bypass $http_upgrade;
            }
            }`}
        />
        <Block
          textoInicial={`cd /etc/nginx/sites-available/
`}
        />
        <Block
          textoInicial={`ls
`}
        />
        <Block
          textoInicial={`sudo ln -s /etc/nginx/sites-available/corussChat-frontend /etc/nginx/sites-enabled
`}
        />
        <Block
          textoInicial={`sudo ln -s /etc/nginx/sites-available/corussChat-backend /etc/nginx/sites-enabled
`}
        />
        <Block
          textoInicial={`sudo nginx -t
`}
        />
        <Block
          textoInicial={`sudo service nginx restart
`}
        />
        <Block
          textoInicial={`sudo nano /etc/nginx/nginx.conf
`}
        />
        <Block
          textoInicial={`client_max_body_size 20M;
          # HANDLE BIGGER UPLOADS
`}
        />
        <Block
          textoInicial={`sudo nginx -t        
`}
        />
        <Block
          textoInicial={`sudo service nginx restart
`}
        />
        <Block
          textoInicial={`sudo apt-get install snapd
`}
        />
        <Block
          textoInicial={`sudo snap install notes
`}
        />
        <Textarea
          rows={8}
          textArea={`
          sudo ufw status
          sudo ufw enable
          sudo ufw allow 22
          sudo ufw allow 80
          sudo ufw allow 443
          sudo ufw status`}
        />
        <Block
          textoInicial={`sudo snap install --classic certbot
`}
        />
        <Block
          textoInicial={`sudo certbot --nginx
`}
        />
      </div>
    </>
  );
}
