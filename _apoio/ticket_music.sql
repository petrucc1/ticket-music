-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 23-Fev-2022 às 03:16
-- Versão do servidor: 10.4.20-MariaDB
-- versão do PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `ticket_music`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cliente`
--

CREATE TABLE `cliente` (
  `CPF` varchar(11) NOT NULL,
  `NOME` varchar(30) NOT NULL,
  `SOBRENOME` varchar(50) NOT NULL,
  `EMAIL` varchar(100) NOT NULL,
  `TELEFONE` varchar(30) NOT NULL,
  `TIPO_DE_PESSOA` varchar(2) NOT NULL,
  `DATA_DE_NASCIMENTO` date NOT NULL,
  `SEXO` varchar(10) NOT NULL,
  `SENHA` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `cliente`
--

INSERT INTO `cliente` (`CPF`, `NOME`, `SOBRENOME`, `EMAIL`, `TELEFONE`, `TIPO_DE_PESSOA`, `DATA_DE_NASCIMENTO`, `SEXO`, `SENHA`) VALUES
('411114683', 'Maria Adelia', 'Consendey Mello', 'maria.mello@geradornv.com.br', '(98) 98679-5722', 'F', '1936-08-17', 'FEMININO', '#C9bl3ZZDLXL'),
('433787814', 'Aurelino', 'Chiles Fernando', 'aurelino.fernando@geradornv.com.br', '(48) 3334-3250', 'F', '1968-02-14', 'MASCULINO', 'l%Tc7GdYokRw');

-- --------------------------------------------------------

--
-- Estrutura da tabela `compra`
--

CREATE TABLE `compra` (
  `COD_COMPRA` int(11) NOT NULL,
  `ID_EVENTO` int(11) NOT NULL,
  `CPF` varchar(11) NOT NULL,
  `QTD_PISTAPREMIUM` int(10) NOT NULL,
  `QTD_PISTA` int(10) NOT NULL,
  `QTD_ARQUIBANDA` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `compra`
--

INSERT INTO `compra` (`COD_COMPRA`, `ID_EVENTO`, `CPF`, `QTD_PISTAPREMIUM`, `QTD_PISTA`, `QTD_ARQUIBANDA`) VALUES
(1, 1, '411114683', 3, 0, 0),
(2, 1, '433787814', 0, 0, 4);

-- --------------------------------------------------------

--
-- Estrutura da tabela `eventos`
--

CREATE TABLE `eventos` (
  `ID_EVENTO` int(11) NOT NULL,
  `NOME` varchar(100) NOT NULL,
  `ARTISTA` varchar(150) NOT NULL,
  `DATA` date NOT NULL,
  `HORA` varchar(10) NOT NULL,
  `LOCAL` varchar(40) NOT NULL,
  `QTD_INGRESSO_PPREMIUM` varchar(1000) NOT NULL,
  `QTD_INGRESSO_PISTA` varchar(11) NOT NULL,
  `QTD_INGRESSO_ARQUIBANCADA` varchar(1000) NOT NULL,
  `PRECO_INGRESSO_PPREMIUM` varchar(30) NOT NULL,
  `PRECO_INGRESSO_PISTA` varchar(30) NOT NULL,
  `PRECO_INGRESSO_ARQUIBANCADA` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `eventos`
--

INSERT INTO `eventos` (`ID_EVENTO`, `NOME`, `ARTISTA`, `DATA`, `HORA`, `LOCAL`, `QTD_INGRESSO_PPREMIUM`, `QTD_INGRESSO_PISTA`, `QTD_INGRESSO_ARQUIBANCADA`, `PRECO_INGRESSO_PPREMIUM`, `PRECO_INGRESSO_PISTA`, `PRECO_INGRESSO_ARQUIBANCADA`) VALUES
(1, 'SHOW DOS AMIGOS', 'ZEZE DE CAMARGO E LUCIANO', '2030-02-08', '22:00', 'ARENA TICKET MUSIC', '3000', '5000', '100000', '350,00', '200,00', '100,00');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`CPF`);

--
-- Índices para tabela `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`COD_COMPRA`),
  ADD KEY `FK_CPF` (`CPF`),
  ADD KEY `FK_ID_EVENTO` (`ID_EVENTO`);

--
-- Índices para tabela `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`ID_EVENTO`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `compra`
--
ALTER TABLE `compra`
  MODIFY `COD_COMPRA` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `eventos`
--
ALTER TABLE `eventos`
  MODIFY `ID_EVENTO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
