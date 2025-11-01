interface IValuePropCardProps {
  title: string;
  description: string;
}

export const ValuePropCard = ({ title, description }: IValuePropCardProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <h4 className='text-h4 font-bebas text-accent'>{title}</h4>
      <p className='text-h6 font-poppins text-light/80 max-w-prose'>
        {description}
      </p>
    </div>
  );
};
