
function ListComponent({ array }) {
    return (
        <div>
            {
                array.map((lenguage, index) => (
                    <div style={{ 'backgroundImage': `url(${lenguage.src})` }} className="img-containers" key={index}>
                    </div>
                ))
            }
        </div>
    )
}

export default ListComponent;