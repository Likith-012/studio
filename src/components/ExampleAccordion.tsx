'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

export function ExampleAccordion() {
  return (
    <Accordion.Root type="single" collapsible className="w-full max-w-md mx-auto">
      <Accordion.Item value="item-1">
        <Accordion.Header>
          <Accordion.Trigger className="group flex w-full items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-md shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <span>Click me!</span>
            <ChevronDown className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2 bg-gray-50 dark:bg-gray-900 rounded-b-md">
          This is the hidden content revealed on click!
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
