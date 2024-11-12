import 'bulma/css/bulma.min.css';

type RegistrationProp<P = unknown> = P & { children: React.ReactNode, title: string, };

export default function Registration({children, title }: RegistrationProp){
  return (
    <article className="message is-large">
      <div className="message-header">
        <div className="container">
          <p className='has-text-centered'>{title}</p>
        </div>
      </div>
      <div className="message-body">
        {children}
      </div>
    </article>
  );
}