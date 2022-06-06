USE Fixacao21_3;

CREATE TABLE Funcionarios(
        Funcionario_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        Nome VARCHAR(255) NOT NULL,
        Sobrenome VARCHAR(255) NOT NULL,
        Email VARCHAR(255) NOT NULL,
        Telefone VARCHAR(255) NOT NULL,
        DataCadastro DATE NOT NULL,
        SetorId INT NOT NULL,
        FOREIGN KEY (SetorId) REFERENCES Setores (SetorId)
    );

CREATE TABLE Setores(
        SetorId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        Setor VARCHAR(255) NOT NULL
    );
