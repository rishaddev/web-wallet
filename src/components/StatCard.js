import "./StatCardStyles.css";

function StatCard(Props){
    return(
        <div className="statCard">
            <p className="statCardp1">{Props.cardTitle}</p>
            <p className="statCardp2">{Props.cardNumbers}</p>
        </div>
    );
}

export default StatCard;

