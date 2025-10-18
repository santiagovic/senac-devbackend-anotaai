-- DB ANOTA AÍ
CREATE DATABASE db_anotaai;
 
USE db_anotaai;
    
CREATE TABLE tb_anotacao(
	id_anotacao			INT 			AUTO_INCREMENT PRIMARY KEY,
    descricao 			VARCHAR(255)	NOT NULL,
    data_criacao		DATE 			NOT NULL,
    data_finalizacao	DATE			NULL,
    id_usuario			INT 			NULL,

	FOREIGN KEY (id_usuario) REFERENCES tb_usuario(id_usuario)
);

INSERT INTO tb_anotacao(descricao,data_criacao,data_finalizacao,id_usuario)
VALUES
(
	'Minha primeira anotação',
    '2025-10-05',
    '2025-10-18',
    NULL
),
(
	'Anotação 2',
    '2025-01-05',
    '2025-02-18',
    NULL
),
(
	'nota do vic',
    '2025-06-07',
    '2025-07-08',
    8
);

SELECT * FROM tb_anotacao;

-- UUID(): Armazenamento criptografado 
CREATE TABLE tb_usuario(
	id_usuario		INT 			AUTO_INCREMENT PRIMARY KEY,
    nome			VARCHAR(255) 	NOT NULL,
    email 			VARCHAR(255) 	NOT NULL	UNIQUE,
    senha 			VARCHAR(30) 	NOT NULL,
    data_nasc		DATE 			NOT NULL
);

SELECT * FROM tb_usuario;

INSERT INTO tb_usuario (nome,email,senha,data_nasc)
VALUES
(
	'Vic',
	'vic@email.com',
    'senha@123',
    '1998-04-22'
), 
(
	'João',
    'joao@mail.com',
    'senha!2',
    '2000-05-05'
);


-- DELETAR REGISTROS COM SAFE MODE ATIVO
SET SQL_SAFE_UPDATES = 0;
DELETE FROM tb_usuario WHERE id_usuario IS NOT NULL;
SET SQL_SAFE_UPDATES = 1;

SET SQL_SAFE_UPDATES = 0;
DELETE FROM tb_anotacao WHERE id_anotacao IS NOT NULL;
SET SQL_SAFE_UPDATES = 1;

-- ALTERAR INFORMAÇÕES DA TABELA: ALTER TABLE nome_da_tabela