import { defineRule } from 'vee-validate';

defineRule('required', (value: string) => {
    if (!value || !value.length) {
        return 'This field is required';
    }
    return true;
});

defineRule('email', (value: string) => {
    // Field is empty, should pass
    if (!value || !value.length) {
        return true;
    }
    // Check if email regex
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(value)) {
        return 'This field must be a valid email';
    }
    return true;
});

defineRule('min', (value: string, [minLength = 3]) => {
    const currentLength = value.length;

    if(currentLength > 0 && currentLength < minLength){
        return `This field must be at least ${minLength} characters ${minLength-currentLength} mode character(s)`;
    }

    return true;
});
