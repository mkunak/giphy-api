import { ReactNode } from 'react'
import { toast, ToastOptions } from 'react-toastify'

class Toaster {
  protected options: ToastOptions = {
    position: 'bottom-left',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  }

  public onSuccess = (message: ReactNode): void => {
    toast.success(message, this.options)
  }

  public onError = (message: ReactNode): void => {
    toast.error(message, this.options)
  }

  public onInfo = (message: ReactNode): void => {
    toast.info(message, this.options)
  }

  public onWarning = (message: ReactNode): void => {
    toast.warning(message, this.options)
  }

  public onDark = (message: ReactNode): void => {
    toast.dark(message, { ...this.options, autoClose: 1500 })
  }
}

export const toaster = new Toaster()
