
export default function Card({ isBusy, science }) {
    return (
        <>
            {isBusy ? (<p></p>) : (
                science.map(function (d, id) {
                    return (
                        <div className = "card">
                            <div className = "container">
                                <p>{d.title}</p>
                            </div>
                        </div>
                    )
                })
            )}
        </>
    );
}