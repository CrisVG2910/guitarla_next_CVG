import Image from "next/image"
import Link from "next/link"
import { formatearFecha } from "../utils/helpers"
import { formatearContenido } from "../utils/helpers"
import styles from '../styles/blog.module.css'

export default function Post({post}) {

  const { imagen, contenido, titulo, url, publishedAt } = post

  return (
    <article>
        <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`imagen blog ${titulo}`} />

        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.resumen}>{formatearContenido(contenido)}</p>
            <Link className={styles.enlace} href={`/blog/${url}`}>
                Leer Post
            </Link>
        </div>
    </article>
  )
}
