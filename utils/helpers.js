export const formatearFecha = fecha => {

    const fechaNueva = new Date(fecha)

    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return fechaNueva.toLocaleDateString('es-ES', opciones)

}

export const formatearContenido = contenido => {

    const textoFormateado = contenido.map(cont => {
        return cont.children.map(conten => {
            return conten.text
        }).join("")
      })

      return textoFormateado
}

export const formatearDescripcion = descripcion => {

    const textoFormateado = descripcion.map(cont => {
        return cont.children.map(desc => {
            return desc.text
        }).join("")
      })

      return textoFormateado
}

