interface IcrudService<T, D> {
    create(data: T): void;
    update(data: T): void;
    delete(id: D): void;
    fetch(): Promise<T[]>;
}
export default IcrudService;
