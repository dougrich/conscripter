export default class MultipleErrors extends Error {
  constructor(message, details) {
    super(message)
    this.details = details
  }
}