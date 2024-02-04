# Cookie Stand Admin

## Author:

Jacob Bassett

## Date:

2-3-2024

## Description:

This is the frontend administrator the for the Salmon Cookies Business. It enables company employees to create and view stats regarding the Salmon Cookie Companies sales figures.

## Usage

Clone this repository onto your local machine and run the following commands from a terminal within the given directory. Update the .env with the appropriate values.

```bash
# create a new node project
npm init -y

# to install next.js and react
npm install next react react-dom

# to install all dependencies
npm install

npm run dev
# go to http://localhost:3000 in your browser
```

Clone the Django server repository(https://github.com/jdabassett/drf-cookie-stand) to your local machine and perform the following commands to get it up and running. Update the .env with the appropriate values.

```bash
# create new virtual environment
python3.12 -m venv .venv

# activate virtual environment
source .venv/bin/activate

# to install all dependencies
(.venv) ➜ pip install -r requirements.txt

# to start application
(.venv) ➜ python manage.py runserver
# go to http://127.0.0.1:8000 in your browser
```


## Visual

This is how it should look after Lab 37.
![landing page](/images/lab37.png)

This is how it should look after Lab 38 with a table.
![landing page](/images/lab38.png)

This is how it should look after Lab 38 without a table.
![landing page](/images/lab38_empty.png)

This is what the login form looks like.
![landing page](/images/lab39_login.png)

This is the landing page when the client is logged in.
![landing page](/images/lab39_empty-form.png)

This is the what the submission form looks like with a record about to be submitted.
![landing page](/images/lab39_create.png)

This is what the submission form looks like with an old record being updated.
![landing page](/images/lab39_update.png)

This is what the table looks like before a record is deleted.
![landing page](/images/lab39_delete.png)