import { format } from 'date-fns'

export function formateDateTime(dateTime: string): string {
  return format(new Date(dateTime), 'dd/MM/yyyy H:mm:ss')
}
