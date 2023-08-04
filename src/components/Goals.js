import "../styles/Goals.scss";

function Goals() {
  return (
    <div className="Goals">
      <div className="heading">
        <h1>Основные задачи</h1>
      </div>
      <div className="tasks_container">
        <div className="task">
          <div className="number">1</div>
          <div className="description">
            <p>Создание комфортных условий и повышение качества обслуживания клиентов</p>
          </div>
        </div>

        <div className="task">
          <div className="number">2</div>
          <div className="description">
            <p>
              Постоянно совершенствовать качество предоставляемых услуг путем обучения персонала,
              закупки нового оборудования и усиленной рекламы на рынке
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goals;
