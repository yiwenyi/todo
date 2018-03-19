#!/usr/bin/env python
# encoding: utf-8
from flask import Flask, render_template, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/__webpack_hmr')
def npm():
    return redirect('http://localhost:8000/__webpack_hmr')


if __name__ == '__main__':
    app.run(debug=True)
