import ListUser from "./ListUsers";

export default function Tab() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Номер</th>
            <th>Имя</th>
            <th>Почта</th>
            <th>Адрес</th>
            <th>Город</th>
            <th>Телефон</th>
            <th>Веб-сайт</th>
            <th>Компания</th>
          </tr>
        </thead>
        <tbody>
          <ListUser />
        </tbody>
      </table>
    </>
  );
}
