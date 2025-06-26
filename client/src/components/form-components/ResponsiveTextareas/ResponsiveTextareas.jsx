import { useState, useEffect } from 'react'; // Import useEffect
import { TextareaProduct } from '@components/form-components/Textarea/TextareaProduct/TextareaProduct.jsx';
import cl from './index.module.scss';
import ArrowAccordion from '@assets/svg/Admin/ArrowAccordion/ArrowAccordion.jsx';

const fields = [
  { name: 'description_uk', label: 'Опис (UA)', placeholder: 'Опис' },
  { name: 'description_en', label: 'Опис (ENG)', placeholder: 'Опис' },
  { name: 'application_uk', label: 'Застосування (UA)', placeholder: 'Застосування' },
  { name: 'application_en', label: 'Застосування (ENG)', placeholder: 'Застосування' },
  { name: 'ingredients', label: 'Склад', placeholder: 'Склад' },
];

const ResponsiveTextareas = ({ register, errors, control }) => {
  const [openItems, setOpenItems] = useState({});
  const [activeTab, setActiveTab] = useState(fields[0].name);

  useEffect(() => {
    const newOpenItems = {};
    fields.forEach(({ name }) => {
      if (errors?.[name]) {
        newOpenItems[name] = true;
      }
    });
    setOpenItems((prev) => ({ ...prev, ...newOpenItems }));
  }, [errors]);

  const toggle = (name) => {
    setOpenItems((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const activeIndex = fields.findIndex((f) => f.name === activeTab);

  return (
    <>
      {/* Mobile: Accordion */}
      <div className={cl.mobile}>
        {fields.map(({ name, label, placeholder }) => (
          <div key={name} className={`${cl.accordionItem} ${errors?.[name] ? cl.error : ''}`}>
            <button type="button" className={` ${openItems[name] ? cl.open : ''}`} onClick={() => toggle(name)}>
              {label}
              <span className={cl.arrowWrapper}>
                <ArrowAccordion
                  className={`${cl.arrow} ${openItems[name] ? cl.open : ''} ${errors?.[name] ? cl.arrowError : ''}`}
                />
              </span>
            </button>
            {openItems[name] && (
              <TextareaProduct
                labelText=""
                name={name}
                placeholder={placeholder}
                register={register}
                errors={errors}
                control={control}
              />
            )}
          </div>
        ))}
      </div>

      {/* Tablet & Desktop: Tabs */}
      <div className={cl.desktop}>
        <div className={cl.tabs}>
          {fields.map(({ name, label }, index) => {
            const isActive = activeTab === name;
            const isLeftOfActive = index === activeIndex - 1;
            const isRightOfActive = index === activeIndex + 1;

            return (
              <button
                key={name}
                type="button"
                className={`
                  ${isActive ? cl.active : ''}
                  ${isLeftOfActive ? cl.leftRounded : ''}
                  ${isRightOfActive ? cl.rightRounded : ''}
                  ${errors?.[name] ? cl.error : ''}
                `}
                onClick={() => setActiveTab(name)}
              >
                {label}
              </button>
            );
          })}
        </div>
        <div className={cl.tabContent}>
          {fields.map(
            ({ name, placeholder }) =>
              activeTab === name && (
                <TextareaProduct
                  key={name}
                  labelText=""
                  name={name}
                  placeholder={placeholder}
                  register={register}
                  errors={errors}
                  control={control}
                />
              )
          )}
        </div>
      </div>
    </>
  );
};

export default ResponsiveTextareas;
