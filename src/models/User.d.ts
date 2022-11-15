declare export type hierarchy = {
    id: number
    school_id: number
    name: string
    can_update: boolean
    can_delete: boolean
    can_enable_users: boolean
}
declare interface Password {
	id: number;
	password: string;
	user_id: number;
	created_at: Date;
}

declare interface Hirarchy {
	id: number;
	name: string;
	can_delete: boolean;
	school_id: number;
	can_update: boolean;
	can_enable_users: boolean;
}

declare interface user {
	id: number;
	full_name: string;
	email: string;
	hierarchy_id: number;
	school_id: number;
	is_enabled: boolean;
	password_id: number;
	should_reset_password: boolean;
	password: string;
	is_super_user: boolean;
	passwords: Password[];
	hirarchy: hierarchy;
}

declare type formData = {
	full_name: {
		value: string;
		min: number;
		max: number;
	};
	email: {
		value: string;
		min: number;
		max: number;
	};
	password: {
		value: string;
		min: number;
		max: number;
	};
	confirmPassword: {
		value: string;
		min: number;
		max: number;
	};
	hierarchy_id: {
		value: number;
	};
};
