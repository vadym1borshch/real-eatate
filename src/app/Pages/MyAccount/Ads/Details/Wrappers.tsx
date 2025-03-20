import { ReactNode, useState } from 'react'
import { cn } from '../../../../../helpers/ui.ts'
import { useTranslation } from 'react-i18next'
import { Field, FieldProps, Form } from 'formik'
import Input from '../../../../../components/atoms/input'
import Dropdown from '../../../../../components/atoms/dropdown'
import RadioButton from '../../../../../components/atoms/radio-button'
import Button from '../../../../../components/atoms/button'

export const FieldWrapper = ({
  children,
  label,
  extra,
  className,
}: {
  children: ReactNode
  label: string
  extra?: ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 items-center gap-1.5 md:grid-cols-2',
        className
      )}
    >
      <label className="flex w-full gap-3">
        {label} {extra ? <span>{extra}</span> : null}
      </label>
      {children}
    </div>
  )
}

export const FormInputWrapper = ({
  fieldName,
  placeholder,
}: {
  fieldName: string
  placeholder?: string
}) => {
  const { t } = useTranslation()
  return (
    <Field name={fieldName}>
      {({ field, meta }: FieldProps) => (
        <Input
          {...field}
          placeholder={placeholder || t('details.details-form.placeholder')}
          id={fieldName}
          error={meta.touched && meta.error ? meta.error : undefined}
          className="min-h-[48px]"
          errorPosition="bottom"
        />
      )}
    </Field>
  )
}

export const FormDropdownWrapper = ({
  fieldName,
  dropdownElements,
}: {
  fieldName: string
  dropdownElements: { value: string; title: string }[]
}) => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  return (
    <Field name={fieldName}>
      {({ field, form }: FieldProps) => {
        const label = dropdownElements.find((el) => el.value === field.value)
        return (
          <Dropdown
            label={
              field.value ? t(label?.title) : t('details.details-form.choose')
            }
            open={open}
            setOpen={(value: boolean) => setOpen(value)}
            id={fieldName}
            variant="outlined"
            withIcon
            triggerButtonClassName="min-h-[48px] w-full"
            dropdownClassName="top-16 md:top-14 lg:top-12 "
          >
            <div className="flex flex-col">
              {dropdownElements.map((el) => {
                return (
                  <span
                    className="hover:bg-charcoal py-3 pl-3 hover:text-white"
                    key={el.value}
                    onClick={() => {
                      form.setFieldValue(fieldName, el.value)
                      setOpen(false)
                    }}
                  >
                    {t(el.title)}
                  </span>
                )
              })}
            </div>
          </Dropdown>
        )
      }}
    </Field>
  )
}

export const FormRadioWrapper = ({ fieldName }: { fieldName: string }) => {
  const { t } = useTranslation()
  return (
    <Field name={fieldName}>
      {({ field, form }: FieldProps) => (
        <div className="flex items-center gap-6 py-3">
          <RadioButton
            label={t('details.details-form.yes')}
            name={fieldName}
            value="Yes"
            checked={field.value === 'yes'}
            onChange={() => form.setFieldValue(fieldName, 'yes')}
          />
          <RadioButton
            label={t('details.details-form.no')}
            name={fieldName}
            value="No"
            checked={field.value === 'no'}
            onChange={() => form.setFieldValue(fieldName, 'no')}
          />
        </div>
      )}
    </Field>
  )
}

export const MainFormWrapper = ({
  children,
  saveButtonHandler,
  nextPageButtonHandler,
}: {
  children?: ReactNode
  saveButtonHandler: () => void
  nextPageButtonHandler: () => void
}) => {
  const { t } = useTranslation()

  return (
    <Form className="flex w-full flex-col gap-3">
      {children}
      <div className="flex flex-col gap-3 pt-[5.625rem] whitespace-nowrap md:flex-row">
        <Button
          size="sm"
          className="w-full lg:w-fit"
          type="submit"
          onClick={saveButtonHandler}
        >
          {t('buttons.save')}
        </Button>
        <Button
          size="sm"
          className="bg-charcoal hover:bg-seafoam-green w-full whitespace-nowrap text-white lg:w-fit"
          onClick={nextPageButtonHandler}
        >
          {t('buttons.next-page')}
        </Button>
      </div>
    </Form>
  )
}
