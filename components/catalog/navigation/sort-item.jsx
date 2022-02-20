import classNames from 'classnames';

export default function SortItem({ styles, name, id, activeId, onHandleItem }) {
  return (
    <div
      onClick={() => onHandleItem(id)}
      className={classNames(styles.sort_item, `${id === activeId ? styles.active : ''}`)}>
      <p>{name}</p>
    </div>
  );
}
