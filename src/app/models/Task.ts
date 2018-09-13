export interface Task {
    id?: string;
    name?: string;
    cat?: string;
    desc?: string;
    progress?: number;
    created_at?: Date;
    completed?: boolean;
    completed_at?: Date;
    collapse?: boolean;
    color?: string;
}

