"use client"
import React, { ReactNode, useState } from 'react'
import Modal from 'react-responsive-modal'
import Chart from './chart'
import { Button } from '@/components/ui/button'
import { ChartProps } from '@/types/meal/chart'

export  function ChartModal({ calories, value, label }: ChartProps): ReactNode {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <Button
                    onClick={() => setOpen(true)}
                    className="text-input sm:bg-accent hover:bg-accent-foreground sm:text-primary p-2 hover:text-input rounded text-sm font-medium"
                >
                    View Nutrition
                </Button>
      <Modal
          classNames={{
              overlay: "bg-black/50 fixed inset-0 flex items-center justify-center",
              modal: "bg-background rounded-2xl border-primary border-2 shadow-xl p-6 w-80 max-w-10/11 text-center",
          }}
          open={open}
          onClose={() => setOpen(false)}
          center
      >
          <h1>
              Calories: {calories}
          </h1>
          <Chart value={value} label={label} />
            </Modal>
        </>
  )
}
