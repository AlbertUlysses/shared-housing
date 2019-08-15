import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Formik, Form, Field } from 'formik';
import { Button, Welcome } from '@storybook/react/demo';
import {
  BaseDatePicker,
  BaseTimePicker,
  BaseRadio,
  BaseSelect,
  BaseCheckbox,
  BaseSlider,
} from '../src/components/Forms/Base';
import ExampleForm from '../src/components/Forms/FormikForms/ExampleForm';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Forms', module)
  .add('Input', () => (
    <ExampleForm
      initValues={{ Firstname: '', LastName: '', FavoriteColor: '' }}
    />
  ))
  .add('Radio', () => (
    <Formik
      initialValues={{ name: 'Tony' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      render={() => (
        <Form>
          <Field
            id="MyRadio"
            label="MyRadioLabel"
            name="name"
            component={BaseRadio}
          />
        </Form>
      )}
    />
  ))
  .add('Select', () => (
    <Formik
      initialValues={{ color: 'red' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      render={({
        handleSubmit,
        isSubmitting,
        values,
        handleReset,
        ...props
      }) => (
        <Form>
          <Field
            name="color"
            label="Color"
            valueOptions={[
              { value: 'red', label: 'Red' },
              { value: 'green', label: 'Green' },
              { value: 'blue', label: 'Blue' },
            ]}
            component={BaseSelect}
            {...props}
          />
        </Form>
      )}
    />
  ))
  .add('Checkbox', () => (
    <Formik
      initialValues={{ color: 'red' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      render={({
        handleSubmit,
        isSubmitting,
        values,
        handleReset,
        ...props
      }) => (
        <Form>
          <Field
            name="color"
            label="Color"
            valueOptions={[
              { value: 'red', label: 'Red' },
              { value: 'green', label: 'Green' },
              { value: 'blue', label: 'Blue' },
            ]}
            component={BaseCheckbox}
            {...props}
          />
        </Form>
      )}
    />
  ))
  .add('TimePicker', () => (
    <Formik
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      render={({
        handleSubmit,
        isSubmitting,
        values,
        handleReset,
        ...props
      }) => (
        <Form>
          <Field
            name="TimePicker"
            label="TimePicker"
            component={BaseTimePicker}
            {...props}
          />
        </Form>
      )}
    />
  ))
  .add('DatePicker', () => (
    <Formik
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      render={({
        handleSubmit,
        isSubmitting,
        values,
        handleReset,
        ...props
      }) => (
        <Form>
          <Field
            name="DatePicker"
            label="DatePicker"
            component={BaseDatePicker}
            {...props}
          />
        </Form>
      )}
    />
  ))
  .add('Slider', () => (
    <Formik
      initialValues={{ happiness: 5 }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      render={({
        handleSubmit,
        isSubmitting,
        values,
        handleReset,
        ...props
      }) => (
        <Form>
          <Field
            name="happiness"
            label="Happiness Level"
            min={0}
            max={5}
            step={1}
            component={BaseSlider}
          />
        </Form>
      )}
    />
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
