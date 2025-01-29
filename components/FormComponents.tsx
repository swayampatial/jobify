import { Control } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from './ui/input';

type CustomFormFieldProps = {
  name: string;
  control: Control<any>;
  placeholder?: string;
};

export function CustomFormField({
  name,
  control,
  placeholder,
}: CustomFormFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="dark:bg-gray-800 bg-white p-4 rounded-lg shadow-md dark:shadow-lg">
          <FormLabel className="capitalize dark:text-gray-300 text-black mb-2">
            {name}
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder={placeholder}
              className="dark:bg-gray-700 bg-gray-100 dark:text-gray-100 text-black dark:border-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none p-2 shadow-sm dark:shadow-blue-900"
            />
          </FormControl>
          <FormMessage className="text-red-500 mt-1" />
        </FormItem>
      )}
    />
  );
}

type CustomFormSelectProps = {
  name: string;
  control: Control<any>;
  items: string[];
  labelText?: string;
};

export function CustomFormSelect({
  name,
  control,
  items,
  labelText,
}: CustomFormSelectProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="dark:bg-gray-800 bg-white p-4 rounded-lg shadow-md dark:shadow-lg">
          <FormLabel className="capitalize dark:text-gray-300 text-black mb-2">
            {labelText || name}
          </FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="dark:bg-gray-700 bg-gray-100 dark:text-gray-100 text-black dark:border-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none p-2 shadow-sm dark:shadow-blue-900">
                <SelectValue />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="dark:bg-gray-700 bg-white dark:border-gray-600 border border-gray-300 rounded-lg shadow-md dark:shadow-blue-900">
              {items.map((item) => (
                <SelectItem
                  key={item}
                  value={item}
                  className="dark:text-gray-100 text-black dark:hover:bg-gray-600 hover:bg-gray-200 p-2 rounded-md"
                >
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage className="text-red-500 mt-1" />
        </FormItem>
      )}
    />
  );
}

export default function AddJobForm() {
  return (
    <div className="dark:bg-gray-900 bg-gray-100 p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
      <h1 className="text-2xl dark:text-gray-100 text-black font-bold mb-6">
        Add Job
      </h1>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CustomFormField
          name="Position"
          control={{} as Control<any>} // Replace with actual `control`
          placeholder="Enter position"
        />
        <CustomFormField
          name="Company"
          control={{} as Control<any>} // Replace with actual `control`
          placeholder="Enter company"
        />
        <CustomFormField
          name="Location"
          control={{} as Control<any>} // Replace with actual `control`
          placeholder="Enter location"
        />
        <CustomFormSelect
          name="Job Status"
          control={{} as Control<any>} // Replace with actual `control`
          items={['pending', 'approved', 'rejected']}
        />
        <CustomFormSelect
          name="Job Mode"
          control={{} as Control<any>} // Replace with actual `control`
          items={['full-time', 'part-time', 'contract']}
        />
        <button
          type="submit"
          className="col-span-1 md:col-span-2 bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-md"
        >
          Create Job
        </button>
      </form>
    </div>
  );
}
