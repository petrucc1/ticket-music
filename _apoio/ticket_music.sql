-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 23-Mar-2022 às 15:29
-- Versão do servidor: 10.4.22-MariaDB
-- versão do PHP: 8.1.2

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
CREATE DATABASE IF NOT EXISTS `ticket_music` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `ticket_music`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `cadastro`
--

CREATE TABLE `cadastro` (
  `id_usuario` int(20) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `cpf` varchar(12) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefone` varchar(12) NOT NULL,
  `senha` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `cadastro`
--

INSERT INTO `cadastro` (`id_usuario`, `nome`, `cpf`, `email`, `telefone`, `senha`) VALUES
(1, 'Rafael Tananka', '72951266006', 'marylolipop@piftir.com', '119755564533', '151515151asd51a'),
(2, 'Vitor João Silva', '02374712052', 'marylolipop@sewce.com', '1178755656', 'dasdasd15100');

-- --------------------------------------------------------

--
-- Estrutura da tabela `compra`
--

CREATE TABLE `compra` (
  `cod_compra` int(25) NOT NULL,
  `id_evento` int(25) NOT NULL,
  `id_usuario` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `evento`
--

CREATE TABLE `evento` (
  `id_evento` int(11) NOT NULL,
  `nome_evento` varchar(150) NOT NULL,
  `data_hora` date NOT NULL,
  `descricao` varchar(400) NOT NULL,
  `link_img` varchar(100) NOT NULL,
  `valor_ingresso` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `evento`
--

INSERT INTO `evento` (`id_evento`, `nome_evento`, `data_hora`, `descricao`, `link_img`, `valor_ingresso`) VALUES
(1, 'Sepultura - SepulQuarta', '2023-10-21', 'Andreas Kisser, Derrick Green, Paulo Xisto Jr. e Eloy Casagrande. Foto de Marcos Hermes. <br>\r\nO Sepultura se prepara para fazer o retorno aos palcos depois de mais de dois anos longe do público. Esse momento se torna ainda mais especial por se tratar do show de lançamento do álbum Quadra, que a banda foi impedida de fazer turnê por conta da pandemia do novo coronavírus.    \r\nO Sepultura havia aca', 'https://www.imagemhost.com.br/images/2022/03/23/01ShowSepultura.jpg', '150'),
(2, 'Pixote - 30 anos ', '2023-03-24', 'O Pixote, um dos maiores grupos de pagode da atualidade, vai se apresentar na arena Ticket music, com a turnê de lançamento do DVD “Fã de Carteirinha Sunset”.\r\n               No repertório, estarão os grandes sucessos que marcaram a carreira da banda e os seus novos hits, como “Nem de Graça”, “Vai Errar de Novo” e “Saudade Arregaça”.', 'https://www.imagemhost.com.br/images/2022/03/23/02ShowPixote.jpg', '150'),
(5, 'Justin Bieber - Justice World Tour', '2023-10-21', 'Justin Bieber anunciou as datas da “Justice World Tour” na América do Sul. O único show confirmado no Brasil é o da Ticket Music.\r\nA turnê foi originalmente idealizada por Justin Bieber para divulgar o álbum Changes, em 2020, mas precisou ser adiada devido a pandemia da Covid-19.\r\nDesde então, o cantor canadense alterou todo o seu cronograma e lançou, em março, o álbum Justice. Em outubro, o artis', ' https://www.imagemhost.com.br/images/2022/03/23/03ShowJustin.jpg', '550'),
(7, ' Anitta - Girl from Rio\r\n', '2023-01-12', 'The Girl From Rio” desembarca na nossa temporada trazendo seus grandes sucessos nacionais e internacionais.\r\nA cantora Anitta vai botar fogo no parquinho retornando ao palco do P12 na agenda Hot Summer 2022.             \r\nPrepare-se para curtir a eterna malandra no nosso verão, que será inesquecível..\r\n       ', 'https://www.imagemhost.com.br/images/2022/03/23/04ShowAnitta.jpg', '200'),
(8, 'Ludmilla - Numanice', '2023-01-30', 'udmilla já tem feito uma série de shows ao vivo. Ela alterna com apresentações do “Numanice“, seu projeto de pagode, com seus shows tradicionais com muito pop e funk. Dessa vez, vai ser um show raiz.\r\nNo repertório, não poderá faltar hits como “Verdinha“, “Deixa de Onda“, “Din Din Din“, “Onda Diferente“, entre outros. Não dá para esquecer também a nova “Socadona“,e ganhou até uma versão de funk ap', 'https://www.imagemhost.com.br/images/2022/03/23/05ShowLudmilla.jp', '250'),
(9, 'Parque Patati Patatá Circo Show', '2023-03-30', 'Após 8 meses de paralisação devido à pandemia do COVID-19, a dupla mais amada do Brasil reestreia o “Patati Patatá Circo Show” em São Paulo. <br>\r\nO espetáculo, assistido por mais de 1 milhão de pessoas, volta devidamente equipado e seguindo todos os protocolos sanitários do município e do estado de São Paulo, oferecendo segurança e conforto ao público e seus colaboradores, tudo isso sem perder a ', 'https://www.imagemhost.com.br/images/2022/03/23/06ShowPatatiPatata.jpg\r\n', '150');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cadastro`
--
ALTER TABLE `cadastro`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Índices para tabela `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`cod_compra`),
  ADD KEY `FK_ID_EVENTO` (`id_evento`),
  ADD KEY `FK_ID_USUARIO` (`id_usuario`) USING BTREE;

--
-- Índices para tabela `evento`
--
ALTER TABLE `evento`
  ADD PRIMARY KEY (`id_evento`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cadastro`
--
ALTER TABLE `cadastro`
  MODIFY `id_usuario` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `compra`
--
ALTER TABLE `compra`
  MODIFY `cod_compra` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `evento`
--
ALTER TABLE `evento`
  MODIFY `id_evento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
