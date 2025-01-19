const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // CORSを有効にするミドルウェア

const app = express();
const port = 3000;

app.use(cors()); // CORSを有効にする

// MySQLデータベース接続設定
const db = mysql.createConnection({
    host: 'localhost', // 例： 'localhost' または データベースサーバーのIPアドレス
    user: 'root', // MySQLのユーザー名
    password: 'Peachkan99', // MySQLのパスワード
    database: 'tanuki' // 使用するデータベース名
});

db.connect(err => {
    if (err) {
        console.error('データベース接続エラー:', err);
        return;
    }
    console.log('データベースに接続されました');
});

// タヌキデータを取得するAPIエンドポイント
app.get('/api/TANUKI', (req, res) => {
    const zooId = parseInt(req.query.zoo_id, 10);
    db.query('SELECT * FROM TANUKI WHERE ZOO_ID = ?', [zooId], (err, results) => {
        if (err) {
            console.error('クエリエラー:', err);
            res.status(500).send('サーバーエラー');
            return;
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
