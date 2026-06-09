const NoPage = () => {
    return (

        <div className="nopage-wrapper">
            <div className="nopage-container">
                <img src="/src/assets/error-image.png" alt="" />
                <h1>Pagina niet gevonden!</h1>
                <p>Sorry, deze pagina <span className="bestaan">bestaat niet.</span> </p>
                <p>:(</p>
            </div>
        </div >
    );
}

export default NoPage;