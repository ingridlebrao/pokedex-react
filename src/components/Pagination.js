const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;

  return (
    <nav className="pagination">
      <button onClick={onLeftClick}>
        <div>
          <span class="material-symbols-outlined">arrow_back_ios</span>
        </div>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onRightClick}>
        <div>
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </div>
      </button>
    </nav>
  );
};

export default Pagination;
