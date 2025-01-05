// Verificar si el usuario existe en la base de datos simulada
function verificarUsuario(usuario, callback) {
    setTimeout(() => {
      // Simulamos que los usuarios 'ana' y 'luis' existen
      const usuariosExistentes = ['ana', 'luis'];
      const existe = usuariosExistentes.includes(usuario);
      callback(existe);
    }, 1000);
  }
  
  // Comprobar si la cuenta del usuario está activa
  function comprobarCuentaActiva(usuario, callback) {
    setTimeout(() => {
      // Simulamos que solo las cuentas excepto 'luis' están activas
      const cuentaActiva = usuario !== 'luis';
      callback(cuentaActiva);
    }, 1000);
  }
  
  // Verificar si el usuario tiene permisos de acceso
  function verificarPermisos(usuario, callback) {
    setTimeout(() => {
      // Simulamos que solo 'ana' tiene permisos
      const tienePermisos = usuario === 'ana';
      callback(tienePermisos);
    }, 1000);
  }
  
  // Orquestación del proceso de verificación
  function procesoDeVerificacion(usuario) {
    console.log(`Iniciando verificación para el usuario: ${usuario}`);
    
    verificarUsuario(usuario, (existe) => {
      if (!existe) {
        return console.log(`El usuario "${usuario}" no existe.`);
      }
      console.log(`Usuario "${usuario}" verificado exitosamente.`);
      
      comprobarCuentaActiva(usuario, (activa) => {
        if (!activa) {
          return console.log(`La cuenta del usuario "${usuario}" no está activa.`);
        }
        console.log(`La cuenta del usuario "${usuario}" está activa.`);
        
        verificarPermisos(usuario, (permisos) => {
          if (!permisos) {
            return console.log(`El usuario "${usuario}" no tiene permisos.`);
          }
          console.log(`El usuario "${usuario}" tiene permisos. Acceso concedido.`);
        });
      });
    });
  }
  
  // Ejecución de la función con diferentes usuarios
  procesoDeVerificacion('ana');   // Usuario con acceso completo
  procesoDeVerificacion('luis');  // Usuario sin cuenta activa
  procesoDeVerificacion('pedro'); // Usuario que no existe
  