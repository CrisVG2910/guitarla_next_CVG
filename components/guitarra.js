import Image from "next/image"
import Link from 'next/link'
import styles from '../styles/guitarras.module.css'
import { formatearDescripcion } from "../utils/helpers" 

export default function Guitarra({guitarra}) {

  const { descripcion, imagen, nombre, precio, url } = guitarra

  return (
    <div className={styles.guitarra}>
      <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`} />

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{formatearDescripcion(descripcion)}</p>
        <p className={styles.precio}>${precio}</p>
        <Link href={`/guitarras/${url}`} className={styles.enlace}>
          Ver Producto
        </Link>
      </div> 
    </div>
  )
}
