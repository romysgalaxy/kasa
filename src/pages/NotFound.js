import '../style/notFound.css'

export default function NotFound() {
    return (
      <div className="notFound">
        <div className="notFound_header">
          <p>404</p>
          <h1>Oups! La page que vous demandez n'existe pas.</h1>
        </div>
        <a href="/">Retourner sur la page d’accueil</a>
      </div>
    );
  }
  