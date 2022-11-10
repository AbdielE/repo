const modeloPersonajes = {
    queryGetPersonajes:"SELECT * FROM personajes",
    queryGetPersonajebyID: `SELECT * FROM personajes WHERE ID = ?`,
    queryDeletePersonajeByID: `UPDATE personajes SET Activo='N' WHERE ID = ?`,
    queryPersonajeExists: `SELECT Alias FROM personajes WHERE Alias = ?`,
    queryAddPersonaje: `
    INSERT INTO personajes (
        Nombre,
        Alias,
        Tipo,
        Organizacion,
        ArmaP,
        ArmaS,
        Dispositivo,
        Habilidad,
        Activo
    ) VALUES (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
    )
    `,
    queryGetPersonajeInfo: `
    SELECT Nombre, Alias, Organizacion, Habilidad 
    FROM personajes 
    WHERE Alias = ?
    `,
    queryUpdateByAlias: `
    UPDATE personajes SET
        Nombre = ?,
        Organizacion = ?,
        ArmaP = ?,
        ArmaS = ?,
        Dispositivo = ?
    WHERE Alias = ?
    `
}

module.exports = modeloPersonajes