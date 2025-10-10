"use client"
import React, { ReactNode, useState } from 'react'
import Modal from 'react-responsive-modal'
import Chart from './chart'
import { ChartProps } from '@/types/meal/chart'

export  function ChartModal({ calories, value, label }: ChartProps): ReactNode {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <button
                    onClick={() => setOpen(true)}
                    className="bg-blue-500 text-white p-2 rounded text-sm font-medium"
                >
                    View Nutrition
                </button>
      <Modal
          classNames={{
              overlay: "bg-black/50 fixed inset-0 flex items-center justify-center",
              modal: "bg-white rounded-2xl shadow-xl p-6 w-96 max-w-full text-center",
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
