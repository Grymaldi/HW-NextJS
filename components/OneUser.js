export default function OneUser({ user }) {
  const {
    id,
    name,
    username,
    email,
    address: {
      street,
      suite,
      city,
      zipcode,
      geo: { lat, lng },
    },
    phone,
    website,
    company: { name: cname, catchPhrase, bs},
  } = user;

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
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{street}, {suite}</td>
            <td>{city}</td>
            <td>{phone}</td>
            <td>{website}</td>
            <td>{cname}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
