CREATE VIEW estatisticas_musicais AS
SELECT COUNT(nome_cancao) AS 'cacoes', COUNT(DISTINCT artista_id) AS 'artistas', COUNT(DISTINCT album_id) AS 'albuns' FROM SpotifyClone.cancoes;